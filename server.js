import express from "express";
import cors from 'cors'
import path from 'path';

const PORT = 2000
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//clientUi
app.use(express.static(path.join(__dirname, 'react/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'react/client/build', 'index.html'));
});



app.listen(PORT, () => {
  console.log(`server runing... on port ${PORT}`);
})
// console.log(server)









