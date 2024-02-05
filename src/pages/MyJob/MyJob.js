import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AppWidgetSummary from './MyJobWidgetSummary.js';
import AppCurrentVisits from './MyJobCurrentVisits.js';
import MyJobView from './TableView/myjob-view.js';
import bagIcon from '../../assets/icons/glass/ic_glass_bag.png';


const categorizeStatus = (status) => {
  const categories = {
    applied: ["Applied", "Application Submitted", "Application received", "Submitted", "Applied"],
    rejected: ["Rejected", "Application Rejected", "Rejected due to insufficient German proficiency", "application rejected", "rejected"],
    inProgress: ["Under Review", "Application Under Review", "Application received and under Review", "Application submitted, waiting for response", "Application under review", "Successfully submitted application, pending review", "Your application has been received and is under review", "Received", "Under Review", "We will be in contact with you as soon as possible.", "application sent and awaiting further processing"],
    interviewsGiven: ["Interviews given"],
  };

  for (const category in categories) {
    if (categories[category].includes(status)) {
      return category;
    }
  }
  return "other";
};

const calculateCategorizedStatusCounts = (data) => {
  let Applied = 0;
  let Rejected = 0;
  let InProgress = 0;
  let Interviews = 0;
  data.forEach((item) => {
    const status = item.status;
    const category = categorizeStatus(status);
    switch (category) {
      case "applied":
        Applied++;
        break;
      case "rejected":
        Rejected++;
        break;
      case "inProgress":
        InProgress++;
        break;
      case "interviewsGiven":
        Interviews++;
        break;
      default:
        break;
    }
  });
  const summary = {
    Applied,
    InProgress,
    Interviews,
    Rejected,
  };

  return summary;
};



export default function MyJob(props) {
  const { myJobData } = props;
  const result = calculateCategorizedStatusCounts(myJobData);

  const chartData = Object.keys(result).map((category) => ({
    label: category,
    value: result[category],
  }));


  return (
    <Container maxWidth="xl">
    <Typography variant="h4" sx={{ mb: 5 }}>
    </Typography>

    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Applied Applications"
          total={result.Applied}
          color="success"
          icon={<img alt="icon" src={bagIcon} />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Application In progress"
          total={result.InProgress}
          color="info"
          icon={<img alt="icon" src={bagIcon} />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Interviews Given"
          total={result.Interviews}
          color="warning"
          icon={<img alt="icon" src={bagIcon} />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Rejection"
          total={result.Rejected}
          color="error"
          icon={<img alt="icon" src={bagIcon} />}
        />
      </Grid>

      <Grid xs={12} md={6} lg={8}>
       <MyJobView myJobData={myJobData}/>
      </Grid>

      <Grid xs={12} md={6} lg={4}>
        <AppCurrentVisits
          title="Application Status"
          chart={{
            series: chartData,
          }}
        />
      </Grid>
    </Grid>
  </Container>
  );
};





