const pcge = {
  '1': {
    name: 'ACTIVO DISPONIBLE Y EXIGIBLE',
    description: `Incluye las cuentas de la 10 hasta la 19. Comprende los fondos en caja y en instituciones
      financieras, y las cuentas por cobrar.
      Los registros efectuados en estas cuentas en el ejercicio económico se efectuarán sin
      considerar el plazo de convertibilidad en efectivo. Para la presentación de estados
      financieros, se identificará la parte corriente de la que no lo es, para mostrarlas por
      separado. En el caso de los saldos en instituciones financieras que resulten acreedoras,
      se reclasificarán para su presentación en el rubro de pasivo que corresponda.`,
    accounts: {
      '10': {
        content: `Agrupa las subcuentas que representan medios de pago como dinero en efectivo,
          cheques, giros, transferencias electrónicas, entre otros, así como los depósitos en
          instituciones financieras, y otros equivalentes de efectivo disponibles a requerimiento
          del titular. Por su naturaleza corresponden a partidas del activo disponible; sin embargo,
          algunas de ellas podrían estar sujetas a restricción en su disposición o uso.`,
        subAccounts: {
          '101': {
            name: 'Caja',
            description: `Efectivo en caja`
          },
          '102': {
            name: 'Fondos fijos',
            description: `Efectivo establecido en un monto fijo o determinado.`
          },
          '103': {
            name: 'Efectivo en tránsito',
            description: `Fondos en movimiento entre los distintos establecimientos
              de la entidad, así como los que se encuentren en poder de las entidades
              transportadoras de caudales. Incluye los cheques girados no entregados a los
              beneficiarios.`
          }
        }
      },
      '11': {
        content: `Incluye inversiones en instrumentos financieros clasificados de acuerdo con un modelo
          de negocio dirigido a la venta de los instrumentos y a la obtención de los flujos de
          efectivo contractuales mientras dure su tenencia. También incluye otras inversiones
          financieras distintas de las mantenidas para negociación, como los instrumentos
          patrimoniales. Las inversiones en instrumentos financieros cuyo modelo de negocio
          responde a la obtención de los flujos de efectivo contractuales y no a su venta, se
          registran en la cuenta 30. Además, esta cuenta contiene los instrumentos financieros
          primarios acordados para su compra futura, cuando son reconocidos en la fecha de
          contratación del instrumento.`,
        subAccounts: {
          '111': {
            name: 'Inversiones mantenidas para negociación',
            description: `Corresponde a las que se
              adquieren con el objetivo de venderlas en el futuro cercano, y de obtener los
              flujos de efectivo contractuales exclusivamente sobre pagos del principal e
              intereses, en fechas específicas, hasta su venta. Los cambios en el valor
              razonable se reconocen en el otro resultado integral (NIIF 9, 4.1.2A) – cuenta 56
              en el patrimonio para efectos de reconocimiento-, o en el resultado del período,
              cuando así se elimina una incongruencia de medición o reconocimiento (NIIF 9,
              4.1.5).`
          }

        }
      },
    }
  }
}
