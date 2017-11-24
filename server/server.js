import app from './app';

app.set("json spaces", 4);
app.listen("3000", () => {
  console.log('app is running on port 3000');
});