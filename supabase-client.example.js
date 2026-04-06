// ARQUIVO DE EXEMPLO - COPIE E RENOMEIE PARA "supabase-client.js"
// Substitua os valores abaixo com sua URL e Chave Anon do Projeto Supabase
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_ANON_KEY = "SUA-CHAVE-ANON-PUBLIC-AQUI";

if (typeof supabase === 'undefined') {
    console.error('Supabase library not loaded. Please include the script tag from CDN.');
}

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for window
window.supabaseClient = _supabase;
