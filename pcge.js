const PCGE = [
  {
    code: '10',
    name: `EFECTIVO Y EQUIVALENTES DE EFECTIVO`,
    description: `Agrupa las subcuentas que representan medios de pago como dinero en efectivo,
      cheques, giros, transferencias electrónicas, entre otros, así como los depósitos en
      instituciones financieras, y otros equivalentes de efectivo disponibles a requerimiento
      del titular. Por su naturaleza corresponden a partidas del activo disponible; sin embargo,
      algunas de ellas podrían estar sujetas a restricción en su disposición o uso.`,
    subAccounts: [
      {
        code: '101',
        name: 'Caja',
        description: `Efectivo en caja`
      },
      {
        code: '102',
        name: 'Fondos fijos',
        description: `Efectivo establecido en un monto fijo o determinado.`
      },
      {
        code: '103',
        name: 'Efectivo en tránsito',
        description: `Fondos en movimiento entre los distintos establecimientos
          de la entidad, así como los que se encuentren en poder de las entidades
          transportadoras de caudales. Incluye los cheques girados no entregados a los
          beneficiarios.`
      },
    ],
    debited: [
      'Las entradas de efectivo a caja y por reembolsos de fondos fijos.',
      'Los depósitos de cheques en instituciones financieras, las entradas de efectivo por medios electrónicos y otras formas de ingreso de efectivo.',
      'La diferencia de cambio, si se incrementa el tipo de cambio de la moneda extranjera.',
      'Las notas de abono emitidas por instituciones financieras.'
    ],
    accredited: [
      'Las salidas de efectivo por pagos a través de caja de fondos fijos.',
      'Los pagos por medio de cheques, medios electrónicos u otras formas de transferencia de efectivo.',
      'La diferencia de cambio, si disminuye el tipo de cambio de la moneda extranjera.',
      'Las notas de cargo emitidas por instituciones financieras.'
    ],
    comments: [
      'Los fondos fijos son montos de cuantía determinada, y son reembolsados para mantener el saldo autorizado, mientras que los saldos en caja son variables',
      'Para propósitos del estado de flujos de efectivo, los saldos de efectivo y equivalentes de efectivo, contienen el saldo de esta cuenta, excepto los fondos sujetos a restricción, pero sin limitarse necesariamente a esta cuenta. Los equivalentes de efectivo también pueden encontrar contenidos en la cuenta 11 Inversiones financieras.',
      'Los cheques girados no entregados a los beneficiarios no dan lugar a la cancelación del pasivo correspondiente hasta su entrega.'
    ]
  },
  {
    code: '11',
    name: 'INVERSIONES FINANCIERAS',
    description: `Incluye inversiones en instrumentos financieros clasificados de acuerdo con un modelo
      de negocio dirigido a la venta de los instrumentos y a la obtención de los flujos de
      efectivo contractuales mientras dure su tenencia. También incluye otras inversiones
      financieras distintas de las mantenidas para negociación, como los instrumentos
      patrimoniales. Las inversiones en instrumentos financieros cuyo modelo de negocio
      responde a la obtención de los flujos de efectivo contractuales y no a su venta, se
      registran en la cuenta 30. Además, esta cuenta contiene los instrumentos financieros
      primarios acordados para su compra futura, cuando son reconocidos en la fecha de
      contratación del instrumento. `,
    subAccounts: [
      {
        code: '111',
        name: 'Inversiones mantenidas para negociación',
        description: `Corresponde a las que se
          adquieren con el objetivo de venderlas en el futuro cercano, y de obtener los
          flujos de efectivo contractuales exclusivamente sobre pagos del principal e
          intereses, en fechas específicas, hasta su venta. Los cambios en el valor
          razonable se reconocen en el otro resultado integral (NIIF 9, 4.1.2A) – cuenta 56
          en el patrimonio para efectos de reconocimiento-, o en el resultado del período,
          cuando así se elimina una incongruencia de medición o reconocimiento (NIIF 9,
          4.1.5).`
      },
      {
        code: '112',
        name: 'Otras inversiones financieras',
        description: `Acumula los instrumentos financieros no
          derivados distintos de las inversiones mantenidas para negociación y de las
          mantenidas hasta el vencimiento, tales como inversiones en instrumentos
          patrimoniales. Los cambios en el valor razonable de los instrumentos
          patrimoniales se reconocen en resultados, o en el otro resultado integral - cuenta
          56 del patrimonio – cuando la elección se efectúa en el reconocimiento inicial
          (NIIF 9, 4.1.4).`
      },
      {
        code: '113',
        name: 'Activos financieros – Acuerdo de compra',
        description: `Incluye los activos financieros para
          los que existe un acuerdo de compra que se liquidará en el futuro, cuando se
          reconocen en la fecha de contratación.`
      },
    ],
    debited: [
      'El costo de adquisición de las inversiones.',
      'Los dividendos en acciones.',
      'La diferencia de cambo si se incrementa el tipo de cambio.',
      'El incremento del valor por la aplicación del valor razonable.',
    ],
    accredited: [
      'El costo y los cambios por medición a valor razonable de las inversiones vendidas o redimidas.',
      'La diferencia de cambio si disminuye el tipo de cambio.',
      'La reducción de valor por la aplicación del valor razonable.',
    ],
    comments: [
      'Las inversiones mantenidas para negociación y las otras inversiones financieras cuyo valor esté expresado en moneda extranjera se traducirán al tipo de cambio al que se liquidarían las transacciones a la fecha de los estados financieros.',
      'Para las inversiones a ser mantenidas hasta el vencimiento, véase la cuenta 30 Inversiones mobiliarias.'
    ]
  },
  {
    code: 'x',
    name: '',
    description: ``,
    subAccounts: [
      {
        code: '',
        name: '',
        description: ``
      },
    ],
    debited: [
      '',
    ],
    accredited: [
      '',
    ],
    comments: [
      '',
    ]
  },
]
