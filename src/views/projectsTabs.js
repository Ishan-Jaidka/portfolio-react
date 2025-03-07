import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Projects from "../components/projects";
import "./projectsTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    sx: { color: "warning.main" },
  };
}

export default function ProjectsTabbed() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="project-tabs-page">
      <div className="page-title" data-aos="fade-up">
        Projects
      </div>
      <Box
        data-aos="fade-down"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                background: "white",
              },
            }}
            textColor="warning.main"
          >
            <Tab label="Published" {...a11yProps(0)} />
            <Tab label="Current" {...a11yProps(1)} />
            <Tab label="Github" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="tab-description">
            These are my projects that are published and live.
          </div>
          <Projects
            project_url={`https://api.github.com/users/${process.env.REACT_APP_GITHUB_USER}/repos`}
            published={true}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="tab-description">
            These are projects I'm currently working on that aren't viewable on
            GitHub.
          </div>
          <Projects project_url={process.env.REACT_APP_CURRENT_PROJECTS} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="tab-description">
            These are my projects on GitHub.
          </div>
          <Projects
            project_url={`https://api.github.com/users/${process.env.REACT_APP_GITHUB_USER}/repos`}
          />
        </TabPanel>
      </Box>
    </div>
  );
}
