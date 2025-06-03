import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { Event, Article, TrendingUp } from '@mui/icons-material';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  impact: 'High' | 'Medium' | 'Low';
}

interface PolicyEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  status: 'Upcoming' | 'Past';
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'BOJ Maintains Ultra-Loose Monetary Policy',
    date: '2024-03-06',
    source: 'Reuters',
    impact: 'High',
  },
  {
    id: 2,
    title: 'Japan Q4 GDP Growth Exceeds Expectations',
    date: '2024-03-05',
    source: 'Bloomberg',
    impact: 'Medium',
  },
  {
    id: 3,
    title: 'Nikkei 225 Hits New Record High',
    date: '2024-03-04',
    source: 'Nikkei',
    impact: 'Medium',
  },
];

const mockPolicyEvents: PolicyEvent[] = [
  {
    id: 1,
    title: 'BOJ Monetary Policy Meeting',
    date: '2024-03-19',
    description: 'Regular monetary policy meeting to discuss interest rates and asset purchases',
    status: 'Upcoming',
  },
  {
    id: 2,
    title: 'BOJ Governor Speech',
    date: '2024-03-15',
    description: 'Speech on economic outlook and monetary policy',
    status: 'Upcoming',
  },
  {
    id: 3,
    title: 'BOJ Policy Decision',
    date: '2024-02-20',
    description: 'Maintained negative interest rates and yield curve control',
    status: 'Past',
  },
];

const MarketEvents = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Market Events & News
      </Typography>

      <Grid container spacing={3}>
        {/* BOJ Policy Tracker */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                BOJ Policy Tracker
              </Typography>
              <List>
                {mockPolicyEvents.map((event) => (
                  <React.Fragment key={event.id}>
                    <ListItem>
                      <ListItemIcon>
                        <Event color={event.status === 'Upcoming' ? 'primary' : 'action'} />
                      </ListItemIcon>
                      <ListItemText
                        primary={event.title}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {event.date}
                            </Typography>
                            {' — '}
                            {event.description}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* News Feed */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Latest News
              </Typography>
              <List>
                {mockNews.map((news) => (
                  <React.Fragment key={news.id}>
                    <ListItem>
                      <ListItemIcon>
                        <Article color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={news.title}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {news.date}
                            </Typography>
                            {' — '}
                            {news.source}
                            {' • '}
                            <Typography
                              component="span"
                              variant="body2"
                              color={
                                news.impact === 'High'
                                  ? 'error'
                                  : news.impact === 'Medium'
                                  ? 'warning'
                                  : 'success'
                              }
                            >
                              {news.impact} Impact
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Market Impact Analysis */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Market Impact Analysis
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        <TrendingUp color="primary" sx={{ mr: 1 }} />
                        Short-term Impact
                      </Typography>
                      <Typography>
                        Recent BOJ decisions have led to increased volatility in the Nikkei 225 Mini
                        futures market, with trading volumes up 15% compared to last month.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        <TrendingUp color="primary" sx={{ mr: 1 }} />
                        Medium-term Outlook
                      </Typography>
                      <Typography>
                        Market expects continued accommodative policy stance, with potential for
                        gradual policy normalization in Q3 2024.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        <TrendingUp color="primary" sx={{ mr: 1 }} />
                        Long-term Trends
                      </Typography>
                      <Typography>
                        Structural reforms and monetary policy coordination expected to drive
                        sustainable growth in Japanese markets.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketEvents; 