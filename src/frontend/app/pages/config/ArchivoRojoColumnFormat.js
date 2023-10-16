import React from 'react';
import { Link } from 'react-router-dom';
import { styles, redFileLabels } from './ArchivoRojoConstants';

const columns = [
  {
    id: 'country_code',
    name: redFileLabels.countryCode,
    selector: (row) => row.country_code,
    sortable: true,
    wrap: true
  },
  {
    id: 'reference_code',
    name: redFileLabels.referenceCode,
    selector: (row) => (
      <Link style={styles.hyperlinkStyle} to={`/archivo/${row.reference_code}`}>
        {row.reference_code}
      </Link>
    ),
    sortable: true,
    wrap: true
  },
  {
    id: 'institution',
    name: redFileLabels.institution,
    selector: (row) => row.institution,
    sortable: true,
    wrap: true
  },
  {
    id: 'title',
    name: redFileLabels.title,
    selector: (row) => row.title,
    sortable: true,
    wrap: true
  },
  {
    id: 'place_and_date',
    name: redFileLabels.placeDate,
    selector: (row) => row.place_and_date,
    sortable: true,
    wrap: true
  },
  {
    id: 'precedence',
    name: redFileLabels.precedence,
    selector: (row) => row.precedence,
    sortable: true,
    wrap: true
  },
  {
    id: 'volume',
    name: redFileLabels.volume,
    selector: (row) => row.volume,
    sortable: true,
    wrap: true
  },
  {
    id: 'language',
    name: redFileLabels.language,
    selector: (row) => row.language,
    sortable: true,
    wrap: true
  },
  {
    id: 'content',
    name: redFileLabels.content,
    selector: (row) => row.content,
    sortable: true,
    wrap: true
  }
];

export default columns;
