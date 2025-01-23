// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.


const express = require('express');
const app = express();
const port = 3010;

// Middleware to parse JSON request body
app.use(express.json());

app.use(express.static('static'));

const students = [
    { "name": "Alice Johnson", "total": 433 },
    { "name": "Bob Smith", "total": 410 },
    { "name": "John Doe", "total": 350 },
    { "name": "Jane Doe", "total": 300 }
];

app.post('/students/above-threshold', (req, res) => {
    const threshold = req.body.threshold;

    if (typeof threshold !== 'number') {
        return res.status(400).json({ message: 'Threshold should be a number' });
    }

    const filteredStudents = students.filter(student => student.total > threshold);
    const response = {
        count: filteredStudents.length,
        students: filteredStudents
    };

    res.json(response);
});

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



