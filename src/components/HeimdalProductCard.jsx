// /src/components/HeimdalProductCard.jsx
import React, {useEffect, useState} from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, Box, TableBody, TableRow, TableCell, Table } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
//import { supabase } from '../services/supabaseClient';
import { databases } from '../services/appwriteClient.js';
import { useAuth } from '../services/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import theme from '../theme.js';


const HeimdalProductCard = () => {

    return (
        <Box mt={1}  >
        <Card elevation={4} sx={{
                    maxWidth: theme.palette.card.maxWidth }} >
            <CardContent>
              <Typography variant="h5"  component="div" mb={1} >
                  Heimdal
                </Typography>
              <Typography variant="caption" mt={4} >
                    Access comprehensive customer data from Heimdal Security's Customers API.
                    Our platform delivers detailed information such as customer status, subscribed products and license usage,
                    helping you manage security services efficiently.
              </Typography>
            </CardContent>
        </Card>
        </Box>
    )
}


export default HeimdalProductCard;
