import React from "react";
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
} from "@mui/material";
import { Event, Article, TrendingUp } from "@mui/icons-material";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  impact: "High" | "Medium" | "Low";
}

interface PolicyEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  status: "Upcoming" | "Past";
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "BOJ Maintains Ultra-Loose Monetary Policy",
    date: "2025-03-06",
    source: "Reuters",
    impact: "High",
  },
  {
    id: 2,
    title: "Japan Q4 GDP Growth Exceeds Expectations",
    date: "2025-03-05",
    source: "Bloomberg",
    impact: "Medium",
  },
  {
    id: 3,
    title: "Nikkei 225 Hits New Record High",
    date: "2025-03-04",
    source: "Nikkei",
    impact: "Medium",
  },
  {
    id: 4,
    title: "BOJ Raises Policy Rate for First Time Since 2024",
    date: "2025-01-24",
    source: "Japan Times",
    impact: "High",
  },
  {
    id: 5,
    title: "BOJ Governor Hints at Further Rate Increases",
    date: "2025-03-15",
    source: "NHK",
    impact: "Medium",
  },
  {
    id: 6,
    title: "BOJ Maintains Negative Interest Rates Amid Global Uncertainty",
    date: "2024-12-20",
    source: "Bloomberg",
    impact: "Medium",
  },
];

const mockPolicyEvents: PolicyEvent[] = [
  {
    id: 1,
    title: "BOJ Monetary Policy Meeting",
    date: "2025-01-24",
    description:
      "The Bank of Japan raised its policy interest rate by 25 basis points to 0.5%, citing increased confidence in wage growth and inflation outlook. The move marks the first rate hike since July 2024 and signals a cautious normalization of monetary policy.",
    status: "Past",
  },
  {
    id: 2,
    title: "BOJ Governor Speech",
    date: "2025-03-15",
    description:
      "BOJ Governor delivered a speech on Japan’s economic outlook, emphasizing continued accommodative policy but hinting at further gradual rate increases if inflation remains above target.",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "BOJ Policy Decision",
    date: "2024-12-20",
    description:
      "The BOJ maintained negative interest rates and yield curve control, citing ongoing uncertainties in global economic conditions and the need to support domestic growth.",
    status: "Past",
  },
];

const MarketEvents = () => {
  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Market Events & News
      </Typography>

      <Grid container spacing={3}>
        {/* BOJ Policy Tracker */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                BOJ Policy Tracker
              </Typography>
              <List>
                {mockPolicyEvents.map((event) => (
                  <React.Fragment key={event.id}>
                    <ListItem>
                      <ListItemIcon>
                        <Event
                          color={
                            event.status === "Upcoming" ? "primary" : "action"
                          }
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={event.title}
                        secondary={
                          <>
                            <Typography
                              component='span'
                              variant='body2'
                              color='text.primary'>
                              {event.date}
                            </Typography>
                            {" — "}
                            {event.description}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider component='li' />
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
              <Typography variant='h6' gutterBottom>
                Latest News
              </Typography>
              <List>
                {mockNews.map((news) => (
                  <React.Fragment key={news.id}>
                    <ListItem>
                      <ListItemIcon>
                        <Article color='primary' />
                      </ListItemIcon>
                      <ListItemText
                        primary={news.title}
                        secondary={
                          <>
                            <Typography
                              component='span'
                              variant='body2'
                              color='text.primary'>
                              {news.date}
                            </Typography>
                            {" — "}
                            {news.source}
                            {" • "}
                            <Typography
                              component='span'
                              variant='body2'
                              color={
                                news.impact === "High"
                                  ? "error"
                                  : news.impact === "Medium"
                                  ? "warning"
                                  : "success"
                              }>
                              {news.impact} Impact
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider component='li' />
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
              <Typography variant='h6' gutterBottom>
                Market Impact Analysis
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography variant='subtitle1' gutterBottom>
                        <TrendingUp color='primary' sx={{ mr: 1 }} />
                        Short-term Impact
                      </Typography>
                      <Typography>
                        Recent BOJ decisions, including the January 2025 rate
                        hike, have increased volatility in Nikkei 225 Mini
                        futures, with trading volumes up 15% compared to last
                        month.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography variant='subtitle1' gutterBottom>
                        <TrendingUp color='primary' sx={{ mr: 1 }} />
                        Medium-term Outlook
                      </Typography>
                      <Typography>
                        The market expects the BOJ to continue a gradual policy
                        normalization through 2025, with further rate hikes
                        possible if inflation and wage growth remain strong.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography variant='subtitle1' gutterBottom>
                        <TrendingUp color='primary' sx={{ mr: 1 }} />
                        Long-term Trends
                      </Typography>
                      <Typography>
                        Structural reforms, robust corporate earnings, and
                        ongoing monetary policy coordination are expected to
                        drive sustainable growth in Japanese equities, with
                        strategists projecting new record highs for the Nikkei
                        225 in 2025.
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
