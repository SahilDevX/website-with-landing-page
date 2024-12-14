// const express = require('express');
// const multer = require('multer');
// const Airtable = require('airtable');
// const axios = require('axios');
// const fs = require('fs');
// require('dotenv').config();

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/upload', upload.single('CandidateResume'), async (req, res) => {
//   const {
//     canname,
//     Phone,
//     altPhone,
//     canemail,
//     DOB,
//     Gender,
//     applyfor,
//     CurrentCTC,
//     ExpectedCTC,
//     Experience,
//     CurrentLocation,
//     NoticePeriod,
//     recemail,
//   } = req.body;

//   const filePath = req.file.path;

//   try {
//     // Log the file details
//     console.log('File details:', req.file);

//     // Upload the file to file.io
//     const formData = new FormData();
//     formData.append('file', fs.createReadStream(filePath));

//     const response = await axios.post('https://file.io', formData, {
//       headers: {
//         ...formData.getHeaders(),
//       },
//     });

//     // Log the response from file.io
//     console.log('File.io response:', response.data);

//     if (response.data.success) {
//       const fileUrl = response.data.link;

//       base(process.env.AIRTABLE_TABLE_NAME).create(
//         {
//           'Name': canname,
//           'Mobile_Number': Phone,
//           'alternate_mobile_number': altPhone,
//           'Email': canemail,
//           'date_of_birth': DOB,
//           'gender': Gender,
//           'category': applyfor,
//           'currentCTC': CurrentCTC,
//           'expectedCTC': ExpectedCTC,
//           'Experience': Experience,
//           'Location': CurrentLocation,
//           'noticePeriod': NoticePeriod,
//           'recEmail': recemail,
//           'Resume': [
//             {
//               url: fileUrl,
//             },
//           ],
//         },
//         (err, record) => {
//           if (err) {
//             console.error('Error creating Airtable record:', err);
//             res.status(500).json({ error: 'Failed to upload data to Airtable' });
//             return;
//           }
//           res.status(200).json({ success: 'Data uploaded successfully', record });
//         }
//       );
//     } else {
//       res.status(500).json({ error: 'Failed to upload file to file.io' });
//     }
//   } catch (error) {
//     console.error('Error during file upload:', error);
//     res.status(500).json({ error: 'An error occurred during file upload' });
//   } finally {
//     fs.unlinkSync(filePath);
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
