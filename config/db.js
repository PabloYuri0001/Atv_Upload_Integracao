const supabase = require('@supabase/supabase-js');
const dotenv = require('dotenv').config();

const url = process.env.SUPABASE_URL;
const api = process.env.SUPABASE_API;


const cliente = supabase.createClient(url,api);

module.exports = cliente;
