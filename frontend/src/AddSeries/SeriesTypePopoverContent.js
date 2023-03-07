import React from 'react';
import DescriptionList from 'Components/DescriptionList/DescriptionList';
import DescriptionListItem from 'Components/DescriptionList/DescriptionListItem';

function SeriesTypePopoverContent() {
  return (
    <DescriptionList>
      <DescriptionListItem
        title="Anime"
        data="Episodes released using an absolute episode number"
      />

      <DescriptionListItem
        title="Daily"
        data="Episodes released daily or less frequently that use year-month-day (2017-05-25)"
      />

      <DescriptionListItem
        title="Standard"
        data="Episodes released with SxxEyy pattern"
      />
      <DescriptionListItem
        title="Episode Title"
        data="Episodes identified by the Episode Title"
      />
    </DescriptionList>
  );
}

export default SeriesTypePopoverContent;
