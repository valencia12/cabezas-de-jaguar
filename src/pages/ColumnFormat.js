const columns = [
    {
        id: 'reference_code',
        name: 'Codigo de referencia',
        selector: (row) => row.reference_code,
        sortable: true
    },
    {
        id: 'country_code',
        name: 'Codigo de pais',
        selector: (row) => row.country_code,
        sortable: true
    },
    {
        id: 'institution',
        name: 'Institucion',
        selector: (row) => row.institution,
        sortable: true
    },
    {
        id: 'dependency',
        name: 'Dependencia',
        selector: (row) => row.dependency,
        sortable: true
    },
    {
        id: 'document_type',
        name: 'Tipo de documento',
        selector: (row) => row.document_type,
        sortable: true
    },
    {
        id: 'title',
        name: 'Titulo',
        selector: (row) => row.title,
        sortable: true
    },
    {
        id: 'place_and_date',
        name: 'Lugar y fecha',
        selector: (row) => row.place_and_date,
        sortable: true
    },
    {
        id: 'content',
        name: 'Contenido',
        selector: (row) => row.content,
        sortable: true
    },
    {
        id: 'precedence',
        name: 'Precedente',
        selector: (row) => row.precedence,
        sortable: true
    },
    {
        id: 'language',
        name: 'language',
        selector: (row) => row.language,
        sortable: true
    },
    {
        id: 'physical_characteristics',
        name: 'Caracteristicas fisicas',
        selector: (row) => row.physical_characteristics,
        sortable: true
    },
    {
        id: 'volume',
        name: 'Volumen',
        selector: (row) => row.volume,
        sortable: true
    },
    {
        id: 'notes',
        name: 'Notas',
        selector: (row) => row.notes,
        sortable: true
    },
    {
        id: 'year',
        name: 'Año',
        selector: (row) => row.year,
        sortable: true
    }
];

export default columns;