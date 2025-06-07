import React from "react";
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
} from "@mui/material";
import {
  PictureAsPdf,
  TableChart,
  VideoLibrary,
  Description,
  School,
  Web,
} from "@mui/icons-material";

interface ResourceItem {
  id: number;
  title: string;
  type: "PDF" | "Excel" | "Video" | "Web";
  description: string;
  thumbnail?: string;
  size?: string;
  duration?: string;
  redirect?: string;
}

const mockResources: ResourceItem[] = [
  {
    id: 1,
    title: "Contract Specification: Nikkei 225 Mini",
    type: "Web",
    description:
      "Nikkei 225 Mini's Contract Specification by Japan Exchange Group (JPX)",
    redirect:
      "https://www.jpx.co.jp/english/derivatives/products/domestic/225mini/01.html",
  },
];

const Resources = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <PictureAsPdf color='error' />;
      case "Excel":
        return <TableChart color='success' />;
      case "Video":
        return <VideoLibrary color='primary' />;
      case "Web":
        return <Web color='primary' />;
      default:
        return <Description />;
    }
  };

  const onBtnClicked = (type: string, redirect?: string) => {
    if (type == "Web") {
      window.open(redirect, "_blank");
    }
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Educational Resources
      </Typography>

      <Grid container spacing={3}>
        {/* Downloadable Materials */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                <School sx={{ mr: 1, verticalAlign: "middle" }} />
                Accessible Materials
              </Typography>
              <List>
                {mockResources
                  .filter((resource) => resource.type !== "Video")
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
                                component='span'
                                variant='body2'
                                color='text.secondary'>
                                {resource.size}
                              </Typography>
                            </>
                          }
                        />
                        <Button
                          variant='outlined'
                          size='small'
                          onClick={() =>
                            onBtnClicked(resource.type, resource.redirect)
                          }>
                          {resource.type == "Web" ? "Access" : "Download"}
                        </Button>
                      </ListItem>
                      <Divider component='li' />
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
              <Typography variant='h6' gutterBottom>
                <VideoLibrary sx={{ mr: 1, verticalAlign: "middle" }} />
                Video Library
              </Typography>
              <Grid container spacing={2}>
                {mockResources
                  .filter((resource) => resource.type === "Video")
                  .map((resource) => (
                    <Grid item xs={12} key={resource.id}>
                      <Card variant='outlined'>
                        <CardMedia
                          component='img'
                          height='140'
                          image={resource.thumbnail}
                          alt={resource.title}
                        />
                        <CardContent>
                          <Typography variant='h6' gutterBottom>
                            {resource.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='text.secondary'
                            paragraph>
                            {resource.description}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            Duration: {resource.duration}
                          </Typography>
                          <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            sx={{ mt: 2 }}>
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
              <Typography variant='h6' gutterBottom>
                Additional Resources
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography variant='subtitle1' gutterBottom>
                        Market Data
                      </Typography>
                      <Typography variant='body2' paragraph>
                        Access real-time market data from tradingview's Nikkei
                        225 Mini Futures chart. Data can be selectable from
                        different contracts.
                      </Typography>
                      <Button
                        variant='outlined'
                        fullWidth
                        onClick={() => {
                          window.open(
                            "https://www.tradingview.com/symbols/OSE-NK225M1!/",
                            "_blank"
                          );
                        }}>
                        View Market Data
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                {/* <Grid item xs={12} md={4}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography variant='subtitle1' gutterBottom>
                        Trading Tools
                      </Typography>
                      <Typography variant='body2' paragraph>
                        Interactive tools for technical analysis and strategy
                        development.
                      </Typography>
                      <Button variant='outlined' fullWidth>
                        Access Tools
                      </Button>
                    </CardContent>
                  </Card>
                </Grid> */}
                {/* <Grid item xs={12} md={4}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography variant='subtitle1' gutterBottom>
                        Community
                      </Typography>
                      <Typography variant='body2' paragraph>
                        Join our trading community for discussions and insights.
                      </Typography>
                      <Button variant='outlined' fullWidth>
                        Join Community
                      </Button>
                    </CardContent>
                  </Card>
                </Grid> */}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resources;
