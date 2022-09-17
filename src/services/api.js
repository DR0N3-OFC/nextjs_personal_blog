import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wxlfnrwdsocjanxdsbsg.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bGZucndkc29jamFueGRzYnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0NDA2MTAsImV4cCI6MTk3OTAxNjYxMH0.EthYI51vm0PUnKevrYrSdLb4iyYcg62LlfnFvDIsPUg',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bGZucndkc29jamFueGRzYnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0NDA2MTAsImV4cCI6MTk3OTAxNjYxMH0.EthYI51vm0PUnKevrYrSdLb4iyYcg62LlfnFvDIsPUg',
  },
});
