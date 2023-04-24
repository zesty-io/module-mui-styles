import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Chip,
  ListItemButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import { Code } from '@mui/icons-material';

export default function Example() {
  //Theme colors table

  //   Table Data
  function createData(themeName, zestyStyle, muiRef, description, changeable) {
    return {
      themeName,
      zestyStyle,
      muiRef,
      description,
      changeable,
    };
  }

  //   Table Rows
  const rows = [
    createData(
      'Primary',
      'brand-primary',
      'primary.main',
      `Applied to component with "primary.main" color props value`,
      'Yes',
    ),
    createData(
      'Secondary',
      'gray-base',

      'secondary.main',
      `Applied to component with "secondar.main" color props value`,
      'Yes',
    ),
    createData(
      'Success',
      'brand-success',
      'success.main',
      `Applied to component with "success.main" color props value`,
      'Yes',
    ),
    createData(
      'Info',
      'brand-info',
      'info.main',
      `Applied to component with "info.main" color props value`,
      'Yes',
    ),
    createData(
      'Warning',
      'brand-warning',
      'warning.main',
      `Applied to component with "warning.main" color props value`,
      'Yes',
    ),
    createData(
      'Error',
      'brand-danger',
      'error.main',
      `Applied to component with "error.main" color props value`,
      'Yes',
    ),
  ];

  return (
    <Container>
      <Box sx={{ boxShadow: 3 }} p={5} m={3}>
        <Typography
          variant="h1"
          align="center"
          fontWeight={700}
          color="warning.main"
          mb={4}
        >
          Zesty Style Variables with MUI Examples
        </Typography>

        <Box>
          <Typography variant="h3" component="h2">
            MUI Theme Colors mapped with Zesty Style Variables
          </Typography>
          <br />
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>MUI Theme Name</TableCell>
                    <TableCell>Zesty Brand Name</TableCell>
                    <TableCell>MUI Reference</TableCell>
                    <TableCell align="center">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography
                          variant="overline"
                          sx={{ color: `${row.themeName.toLowerCase()}.main` }}
                          fontWeight={600}
                        >
                          {row.themeName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{ color: `${row.themeName.toLowerCase()}.main` }}
                          fontWeight={580}
                          fontSize={12}
                        >
                          @{row.zestyStyle}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">{row.muiRef}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {row.description}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Theme Color Example */}
          <Box m={5}>
            <Card
              sx={{
                backgroundColor: 'warning.light',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              {/* Note panel */}
              <Typography variant="subtitle2" fontFamily={'Verdana'}>
                MUI Theme colors are mapped to the Zesty Brand colors. The theme
                Colors can be applied in most components using
                <Link
                  variant="caption"
                  href="https://mui.com/system/getting-started/the-sx-prop/"
                  target="_blank"
                  color="primary.main"
                  fontWeight={600}
                >
                  "sx"
                </Link>{' '}
                or{' '}
                <Link
                  variant="caption"
                  href="https://mui.com/material-ui/customization/color/"
                  target="_blank"
                  color="primary.main"
                  fontWeight={600}
                >
                  "color"
                </Link>{' '}
                prop
              </Typography>
            </Card>

            <Typography mt={3} variant="h4">
              Using sx prop:
            </Typography>
            <Box
              component="div"
              sx={{
                backgroundColor: '#101010',
                border: '5px solid',
                borderColor: 'grey.500',
                borderRadius: '5px',
                color: 'info.light',
                padding: '20px',
                fontFamily: 'monospace',
                code: { color: 'info.light' },
              }}
            >
              <text>
                {`<Typography sx={{color: "primary.main"}}> 
                Hello World 
                </Typography>`}
              </text>
            </Box>

            <Typography mt={1}> Output: </Typography>

            <Card sx={{ padding: '1rem' }}>
              <Typography sx={{ color: 'primary.main' }}>
                {' '}
                Hello World, I am using sx prop.
              </Typography>
            </Card>

            <Typography mt={3} variant="h4">
              Using color props:
            </Typography>

            <Box
              component="div"
              sx={{
                backgroundColor: '#101010',
                border: '5px solid',
                borderColor: 'grey.500',
                borderRadius: '5px',
                color: 'info.light',
                padding: '20px',
                fontFamily: 'monospace',
                code: { color: 'info.light' },
              }}
            >
              <text>
                {`<Typography sx={{color: "primary.main"}}> 
                Hello World 
                </Typography>`}
              </text>
            </Box>

            <Typography mt={1}> Output: </Typography>

            <Card sx={{ padding: '1rem' }}>
              <Typography sx={{ color: 'primary.main' }}>
                {' '}
                Hello World! I am using color prop.
              </Typography>
            </Card>
          </Box>
        </Box>

        <Box
          m={5}
          mt={7}
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Typography variant="h3">Typography:</Typography>
          <Typography variant="h1">
            This is H1 with{' '}
            <Typography
              sx={{ color: 'primary.main' }}
              variant="h1"
              component="span"
            >
              primary theme color
            </Typography>
          </Typography>
          <Typography variant="h2">
            This is H2 with{' '}
            <Typography
              sx={{ color: 'secondary.main' }}
              variant="h2"
              component="span"
            >
              secondary theme color
            </Typography>
          </Typography>
          <Typography variant="h3">
            This is H3 with{' '}
            <Typography
              sx={{ color: 'success.main' }}
              variant="h3"
              component="span"
            >
              success theme color
            </Typography>
          </Typography>
          <Typography variant="h4">
            This is H4 with{' '}
            <Typography
              sx={{ color: 'info.main' }}
              variant="h4"
              component="span"
            >
              info theme color
            </Typography>
          </Typography>
          <Typography variant="h5">
            This is H5 with{' '}
            <Typography
              sx={{ color: 'warning.main' }}
              variant="h5"
              component="span"
            >
              warning theme color
            </Typography>
          </Typography>
          <Typography variant="h6">
            This is H6 with{' '}
            <Typography
              sx={{ color: 'error.main' }}
              variant="h6"
              component="span"
            >
              error theme color
            </Typography>
          </Typography>

          <Typography>This is the normal text</Typography>
          <Typography mt={3} variant="h3">
            Typography component with header variant:
          </Typography>

          {/* Codeblock */}
          <Box
            component="div"
            sx={{
              backgroundColor: '#101010',
              border: '5px solid',
              borderColor: 'grey.500',
              borderRadius: '5px',
              color: 'info.light',
              padding: '20px',
              fontFamily: 'monospace',
            }}
          >
            <code>{`<Typography variant="h1" color="primary.main">
                Hello World
            </Typography>`}</code>
          </Box>
          <Typography> Output: </Typography>
          <Card sx={{ padding: '1rem' }}>
            <Typography variant="h1" color="primary.main">
              Hello World
            </Typography>
          </Card>

          <Card
            sx={{
              backgroundColor: 'warning.light',
              padding: '1rem',
            }}
          >
            {/* Note panel */}
            <Typography variant="subtitle2" fontFamily={'Verdana'}>
              Some Typography settings from the zesty instace such as:
              @font-size-base, @headings-color and @headings-font-weight are
              added by default to h1-h6 variants.
            </Typography>
            <br />
            <Typography variant="subtitle2">
              <Link
                href="https://mui.com/material-ui/react-typography/"
                target="_blank"
                rel="noopener"
                sx={{ fontWeight: '600', fontFamily: 'Verdana' }}
              >
                Click here
              </Link>{' '}
              for more Typography details with MUI
            </Typography>
          </Card>
        </Box>

        <Box
          m={5}
          mt={7}
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <Box
              component="div"
              sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <Typography mt={3} variant="h3">
                Buttons with theme colors:
              </Typography>
              <Button variant="contained" sx={{ width: '200px' }}>
                Primary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: '200px' }}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ width: '200px' }}
              >
                Success
              </Button>
              <Button variant="contained" color="info" sx={{ width: '200px' }}>
                Info
              </Button>
              <Button
                variant="contained"
                color="warning"
                sx={{ width: '200px' }}
              >
                Warning
              </Button>
              <Button variant="contained" color="error" sx={{ width: '200px' }}>
                Error
              </Button>
            </Box>
            <Box
              component="div"
              sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <Typography mt={3} variant="h3">
                Button variants:
              </Typography>
              <Button variant="text" color="primary" sx={{ width: '200px' }}>
                Text / Default
              </Button>

              <Button
                variant="contained"
                color="primary"
                sx={{ width: '200px' }}
              >
                Contained
              </Button>

              <Button
                variant="outlined"
                color="primary"
                sx={{ width: '200px' }}
              >
                Outlined
              </Button>
            </Box>
          </Box>

          <Typography mt={3} variant="h3">
            Button usage example:
          </Typography>
          {/* Codeblock */}
          <Box
            component="div"
            sx={{
              backgroundColor: '#101010',
              border: '5px solid',
              borderColor: 'grey.500',
              borderRadius: '5px',
              color: 'info.light',
              padding: '20px',
              fontFamily: 'monospace',
            }}
          >
            <code>{`<Button variant="contained" color="success">
              Primary
            </Button>`}</code>
          </Box>
          <Typography> Output: </Typography>
          <Card sx={{ padding: '1rem' }}>
            <Button variant="contained" color="success">
              Success Button
            </Button>
          </Card>
          {/* Note panel */}
          <Card
            sx={{
              backgroundColor: 'warning.light',
              padding: '1rem',
            }}
          >
            <Typography variant="subtitle2" fontFamily={'Verdana'}>
              Button theme colors are also based from the Zesty Instace brand
              colors. For more details about
              <code style={{ color: 'green' }}>
                {'<Button>'}
              </code> component, <Link>click here</Link>.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
