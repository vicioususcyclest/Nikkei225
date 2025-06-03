import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  PictureAsPdf,
  TableChart,
  VideoLibrary,
  Description,
  School,
} from '@mui/icons-material';

interface ResourceItem {
  id: number;
  title: string;
  type: 'PDF' | 'Excel' | 'Video';
  description: string;
  thumbnail?: string;
  size?: string;
  duration?: string;
}

const mockResources: ResourceItem[] = [
  {
    id: 1,
    title: 'Nikkei 225 Mini Trading Guide',
    type: 'PDF',
    description: 'Comprehensive guide to trading Nikkei 225 Mini futures',
    size: '2.5 MB',
  },
  {
    id: 2,
    title: 'Margin Calculator Template',
    type: 'Excel',
    description: 'Excel template for calculating margin requirements',
    size: '1.2 MB',
  },
  {
    id: 3,
    title: 'Introduction to Nikkei 225 Mini',
    type: 'Video',
    description: 'Learn the basics of Nikkei 225 Mini futures trading',
    duration: '15:30',
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Advanced Trading Strategies',
    type: 'PDF',
    description: 'Detailed guide to advanced trading strategies',
    size: '3.1 MB',
  },
  {
    id: 5,
    title: 'Market Analysis Template',
    type: 'Excel',
    description: 'Template for technical and fundamental analysis',
    size: '1.8 MB',
  },
  {
    id: 6,
    title: 'Risk Management Best Practices',
    type: 'Video',
    description: 'Learn how to manage risk in futures trading',
    duration: '20:15',
    thumbnail: 'https://via.placeholder.com/300x200',
  },
];

const Resources = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <PictureAsPdf color="error" />;
      case 'Excel':
        return <TableChart color="success" />;
      case 'Video':
        return <VideoLibrary color="primary" />;
      default:
        return <Description />;
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Educational Resources
      </Typography>

      <Grid container spacing={3}>
        {/* Downloadable Materials */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                Downloadable Materials
              </Typography>
              <List>
                {mockResources
                  .filter((resource) => resource.type !== 'Video')
                  .map((resource) => (
                    <React.Fragment key={resource.id}>
                      <ListItem>
                        <ListItemIcon>{getIcon(resource.type)}</ListItemIcon>
                        <ListItemText
                          primary={resource.title}
                          secondary={
                            <>
                              {resource.description}
                              <br />
                              <Typography
                                component="span"
                                variant="body2"
                                color="text.secondary"
                              >
                                {resource.size}
                              </Typography>
                            </>
                          }
                        />
                        <Button variant="outlined" size="small">
                          Download
                        </Button>
                      </ListItem>
                      <Divider component="li" />
                    </React.Fragment>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Video Library */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <VideoLibrary sx={{ mr: 1, verticalAlign: 'middle' }} />
                Video Library
              </Typography>
              <Grid container spacing={2}>
                {mockResources
                  .filter((resource) => resource.type === 'Video')
                  .map((resource) => (
                    <Grid item xs={12} key={resource.id}>
                      <Card variant="outlined">
                        <CardMedia
                          component="img"
                          height="140"
                          image={resource.thumbnail}
                          alt={resource.title}
                        />
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {resource.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {resource.description}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Duration: {resource.duration}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                          >
                            Watch Now
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Additional Resources */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Additional Resources
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Market Data
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Access real-time market data, historical prices, and technical indicators.
                      </Typography>
                      <Button variant="outlined" fullWidth>
                        View Market Data
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Trading Tools
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Interactive tools for technical analysis and strategy development.
                      </Typography>
                      <Button variant="outlined" fullWidth>
                        Access Tools
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Community
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Join our trading community for discussions and insights.
                      </Typography>
                      <Button variant="outlined" fullWidth>
                        Join Community
                      </Button>
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

export default Resources; 