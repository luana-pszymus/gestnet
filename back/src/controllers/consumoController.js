const db = require("../database/db");

exports.registrarConsumo = async (req, res) => {
  try {
    const { kitnetId } = req.params;
    const { mes, ano, consumo_kwh, preco_kwh } = req.body;

    // Buscar contrato ativo da kitnet
    const contratoResult = await db.query(
      `
      SELECT c.id, k.valor_aluguel, i.nome
      FROM contrato c
      JOIN kitnet k ON c.kitnet_id = k.id
      JOIN inquilino i ON c.inquilino_id = i.id
      WHERE c.kitnet_id = $1
      AND c.data_fim IS NULL
    `,
      [kitnetId],
    );

    // Verificar se encontrou contrato
    if (contratoResult.rows.length === 0) {
      return res.status(404).json({
        erro: "Nenhum contrato ativo encontrado para essa kitnet",
      });
    }

    const contrato = contratoResult.rows[0];

    // Calcular valores
    const valorEnergia = consumo_kwh * preco_kwh;
    const valorTotal = valorEnergia + contrato.valor_aluguel;

    // Salvar consumo
    const consumo = await db.query(
      `
      INSERT INTO consumo_energia
      (contrato_id, mes, ano, consumo_kwh, preco_kwh, valor_energia, valor_total)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *
    `,
      [contrato.id, mes, ano, consumo_kwh, preco_kwh, valorEnergia, valorTotal],
    );

    // Retornar resposta
    res.json({
      inquilino: contrato.nome,
      valor_aluguel: contrato.valor_aluguel,
      ...consumo.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao registrar consumo" });
  }
};
