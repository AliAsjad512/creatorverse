import { createClient } from '@supabase/supabase-js';


const URL = 'https://gckskvcfmhlgkzklhpba.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdja3NrdmNmbWhsZ2t6a2xocGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5OTcwNjAsImV4cCI6MjAzOTU3MzA2MH0.uYe9nYMiVixgI9ftA3jpdmXKr0Pu_jHBp1YRYGdQNAo';


export const supabase = createClient(URL, API_KEY);
