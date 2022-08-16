import PropTypes, { array } from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
// import chartData from './chart-data/total-growth-bar-chart';
import axios from 'axios';

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const [value, setValue] = useState('today');

    // Fetching data from strapi
    const baseURL = 'https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?pagination[pageSize]=10000';

    const [mainPost, setMainPost] = useState(null);
    const [team0, setTeam0] = useState(null);
    const [team1, setTeam1] = useState(null);
    const [team2, setTeam2] = useState(null);
    const [team3, setTeam3] = useState(null);
    const [team4, setTeam4] = useState(null);
    const [team5, setTeam5] = useState(null);
    const [team6, setTeam6] = useState(null);
    const [team7, setTeam7] = useState(null);
    const [team8, setTeam8] = useState(null);
    const [team9, setTeam9] = useState(null);

    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const { navType } = customization;
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMainPost(response.data.data);
        });
    }, []);

    // const msg = mainPost != null ? 'I have data' : 'I am null and empty sir';

    // console.log(mainPost);

    const teamAllData = {};
    const xAxisValues = [];
    const totalTeams = [];
    const one0BookingValues = [];
    const one1BookingValues = [];
    const one2BookingValues = [];
    const one3BookingValues = [];
    const one4BookingValues = [];
    const one5BookingValues = [];
    const one6BookingValues = [];
    const one7BookingValues = [];
    const one8BookingValues = [];
    const one9BookingValues = [];

    if (mainPost != null) {
        mainPost.map((item) => (xAxisValues.includes(item.attributes.date) ? '' : xAxisValues.push(item.attributes.date)));
    }

    // if (mainPost != null) {
    //     mainPost.map((itemForTeams) =>
    //         totalTeams.includes(itemForTeams.team_code) || totalTeams.includes(itemForTeams.team_code)
    //             ? ''
    //             : totalTeams.push(itemForTeams.team_code)
    //     );
    // }

    // team0.map((singleDate) => {
    //     one0BookingValues.push(singleDate.booking_with_app_no);
    // });

    // (teamAllData[singleTeam + '_AllValues'] = singleTeam.charAt(1))

    // need to instantiate arrays
    // if (totalTeams.length > 0) {
    //     totalTeams.map((teamArr) => (teamAllData[teamArr] = []));
    // }

    // Team A

    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1A').then((response) => {
            setTeam0(response.data.data);
        });
    }, []);

    if (team0 != null) {
        team0.map((singleDate) => {
            one0BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team B

    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1B').then((response) => {
            setTeam1(response.data.data);
        });
    }, []);

    if (team1 != null) {
        team1.map((singleDate) => {
            one1BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team C

    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1C').then((response) => {
            setTeam2(response.data.data);
        });
    }, []);

    if (team2 != null) {
        team2.map((singleDate) => {
            one2BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team D

    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1D').then((response) => {
            setTeam3(response.data.data);
        });
    }, []);
    if (team3 != null) {
        team3.map((singleDate) => {
            one3BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team E

    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1E').then((response) => {
            setTeam4(response.data.data);
        });
    }, []);

    if (team4 != null) {
        team4.map((singleDate) => {
            one4BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team F
    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1F').then((response) => {
            setTeam5(response.data.data);
        });
    }, []);

    if (team5 != null) {
        team5.map((singleDate) => {
            one5BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team I
    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1I').then((response) => {
            setTeam6(response.data.data);
        });
    }, []);

    if (team6 != null) {
        team6.map((singleDate) => {
            one6BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team J
    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1J').then((response) => {
            setTeam7(response.data.data);
        });
    }, []);

    if (team7 != null) {
        team7.map((singleDate) => {
            one7BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team K
    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1K').then((response) => {
            setTeam8(response.data.data);
        });
    }, []);

    if (team8 != null) {
        team8.map((singleDate) => {
            one8BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // Team L
    useEffect(() => {
        axios.get('https://secret-tundra-66211.herokuapp.com/api/swvl-tracking-overviews?filters[team_code][$eq]=1L').then((response) => {
            setTeam9(response.data.data);
        });
    }, []);

    if (team9 != null) {
        team9.map((singleDate) => {
            one9BookingValues.push(singleDate.attributes.booking_with_app_no);
        });
    }

    // console.log(totalTeams);
    console.log(xAxisValues);
    console.log(one0BookingValues);
    console.log(one1BookingValues);
    console.log(one2BookingValues);
    console.log(one3BookingValues);
    console.log(one4BookingValues);
    console.log(one5BookingValues);
    console.log(one6BookingValues);
    console.log(one7BookingValues);
    console.log(one8BookingValues);
    console.log(one9BookingValues);

    // using the data here
    const chartData = {
        // Add state

        height: 680,
        type: 'bar',
        options: {
            chart: {
                id: 'bar-chart',
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%'
                }
            },
            xaxis: {
                type: 'category',
                categories: xAxisValues.sort()
            },

            legend: {
                show: true,
                fontSize: '14px',
                fontFamily: `'Roboto', sans-serif`,
                position: 'bottom',
                offsetX: 20,
                labels: {
                    useSeriesColors: false
                },
                markers: {
                    width: 15,
                    height: 15,
                    radius: 5
                },
                itemMargin: {
                    horizontal: 8,
                    vertical: 5
                }
            },
            fill: {
                type: 'solid'
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true
            }
        },
        series: [
            {
                name: '1A',
                data: one0BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [6, 9, 17, 32, 24, 25, 26, 29, 31, 35, 35, 35, 39, 41, 38, 0]
            },
            {
                name: '1B',
                data: one1BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [15, 12, 20, 2, 26, 30, 31, 30, 30, 35, 36, 40, 35, 32, 40, 0]
            },
            {
                name: '1C',
                data: one2BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [5, 8, 13, 27, 25, 34, 25, 30, 30, 41, 35, 41, 30, 40, 27, 0]
            },
            {
                name: '1D',
                data: one3BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '1E',
                data: one4BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '1F',
                data: one5BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [1, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '1I',
                data: one6BookingValues
                // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '1J',
                data: one7BookingValues
                // // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [12, 24, 30, 36, 31, 31, 33, 36, 30, 37, 39, 36, 39, 0, 0, 0]
            },
            {
                name: '1K',
                data: one8BookingValues
                // // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [6, 22, 26, 12, 14, 18, 25, 34, 30, 39, 34, 32, 40, 0, 0, 0]
            },
            {
                name: '1L',
                data: one9BookingValues
                // // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                // data: [5, 26, 1, 27, 4, 21, 16, 27, 31, 20, 32, 41, 40, 0, 0, 0]
            }
        ]
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle2">Total Growth</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3">$2,324.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            {/* {console.log(totalTeams.sort())} */}
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
