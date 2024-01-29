import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AppWidgetSummary from './MyJobWidgetSummary.js';
import AppCurrentVisits from './MyJobCurrentVisits.js';
import MyJobView from './TableView/myjob-view.js';


export default function MyJob() {
 
  return (
    <Container maxWidth="xl">
    <Typography variant="h4" sx={{ mb: 5 }}>
      Hi, Welcome To My Job 👋
    </Typography>

    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Applied Applications"
          total={714000}
          color="success"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Application In progress"
          total={1352831}
          color="info"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Interviews Given"
          total={1723315}
          color="warning"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Rejection"
          total={234}
          color="error"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
        />
      </Grid>

      <Grid xs={12} md={6} lg={8}>
       <MyJobView />
      </Grid>

      <Grid xs={12} md={6} lg={4}>
        <AppCurrentVisits
          title="Application Status"
          chart={{
            series: [
              { label: 'Applied', value: 4344 },
              { label: 'In-progress', value: 5435 },
              { label: 'Interviews', value: 1443 },
              { label: 'Rejected', value: 4443 },
            ],
          }}
        />
      </Grid>
    </Grid>
  </Container>
  );
};





