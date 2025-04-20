// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hqdnzdubfwswzvveloat.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZG56ZHViZndzd3p2dmVsb2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MjYwMTcsImV4cCI6MjA1ODQwMjAxN30.QtebwWNyhE6Qxyodi5gCKAlP1tpvFy-Cos8Yzfu4po0' // Replace with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
