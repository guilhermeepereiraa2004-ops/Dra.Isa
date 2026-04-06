// Configuração do Cliente Supabase
// Substitua os valores abaixo com sua URL e Chave Anon do Projeto Supabase
const SUPABASE_URL = "https://ajfurphbphyvclphdupe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZnVycGhicGh5dmNscGhkdXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTI0MzAsImV4cCI6MjA5MTA2ODQzMH0.tdHdVTfjf5wT8jZ3sxCL9ggm6OZT7AGpdg-GLejrpV0";

if (typeof supabase === 'undefined') {
    console.error('Supabase library not loaded. Please include the script tag from CDN.');
}

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for window
window.supabaseClient = _supabase;
