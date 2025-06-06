import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Paper,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const ExamAndStandardManager = () => {
  const [examInput, setExamInput] = useState("");
  const [standardInput, setStandardInput] = useState("");
  const [exams, setExams] = useState([]);
  const [standards, setStandards] = useState([]);

  const [subjectInput, setSubjectInput] = useState("");
  const [examTypeInput, setExamTypeInput] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [examTypes, setExamTypes] = useState([]);

  const [chapterInput, setChapterInput] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [chapters, setChapters] = useState([]);

  const [subtopicInput, setSubtopicInput] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [subtopics, setSubtopics] = useState([]);

  // Dummy API handlers
  const handleAddExam = () => {
    if (examInput.trim() === "") return;
    setExams([...exams, examInput.trim()]);
    setExamInput("");
  };

  const handleAddStandard = () => {
    if (standardInput.trim() === "") return;
    setStandards([...standards, standardInput.trim()]);
    setStandardInput("");
  };

  // Dummy API handlers
  const handleAddSubject = () => {
    if (subjectInput.trim() === "") return;
    setSubjects([...subjects, subjectInput.trim()]);
    setSubjectInput("");
  };

  const handleAddExamType = () => {
    if (examTypeInput.trim() === "") return;
    setExamTypes([...examTypes, examTypeInput.trim()]);
    setExamTypeInput("");
  };

  const handleAddChapter = () => {
    if (!selectedSubject || chapterInput.trim() === "") return;

    const chapterName = chapterInput.trim();
    const label = `${chapterName} (${selectedSubject})`;

    const newChapter = {
      chapter: chapterName,
      subject: selectedSubject,
      label,
    };

    setChapters((prev) => [...prev, newChapter]);
    setChapterInput("");

    console.log("Added Chapter:", newChapter);
    console.log("All Chapters:", [...chapters, newChapter]);
  };

  const handleAddSubtopic = () => {
    if (subtopicInput.trim() && selectedChapter.trim()) {
      const label = `${subtopicInput.trim()} (${selectedChapter.trim()})`;
      setSubtopics((prev) => [
        ...prev,
        {
          subtopic: subtopicInput.trim(),
          chapter: selectedChapter.trim(),
          label,
        },
      ]);
      setSubtopicInput("");
    }
  };

  /*Remove logic start here*/

  const handleRemoveExam = (exam) => {
    setExams(exams.filter((e) => e !== exam));
  };

  const handleRemoveStandard = (standard) => {
    setStandards(standards.filter((s) => s !== standard));
  };

  const handleRemoveSubject = (subject) => {
    setSubjects(subjects.filter((s) => s !== subject));
  };

  const handleRemoveExamType = (examType) => {
    setExamTypes(examTypes.filter((e) => e !== examType));
  };

  const handleRemoveChapter = (chapter) =>
    setChapters(chapters.filter((c) => c !== chapter));

  const handleRemoveSubtopic = (subtopic) =>
    setSubtopics(subtopics.filter((s) => s !== subtopic));

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Add (Exam / Standard / Exam Type / Subject / Chapter / Sub Topic)</h5>
      </div>

      <Paper sx={{ p: 4, borderRadius: 2, marginBottom: "30px" }}>
        <Typography variant="h6" gutterBottom>
          Manage Exams and Standards
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 2,
            mt: 2,
          }}
        >
          <div className="d-flex align-items-center gap-2 w-100">
            <TextField
              fullWidth
              label="Add Exam Name"
              value={examInput}
              onChange={(e) => setExamInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddExam}>
              Add
            </Button>
          </div>

          <div className="d-flex align-items-center gap-2 w-100">
            <TextField
              fullWidth
              label="Add Standard"
              value={standardInput}
              onChange={(e) => setStandardInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddStandard}>
              Add
            </Button>
          </div>
        </Box>

        {/* Display Exams */}
        {exams.length > 0 && (
          <Box mt={4}>
            <Typography variant="subtitle1" gutterBottom>
              Exams:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={"10px"}>
              {exams.map((exam, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    px: 3,
                    bgcolor: "primary.light",
                    color: "white",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {exam}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveExam(exam)}
                    sx={{ color: "white", ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        )}

        {/* Display Standards */}
        {standards.length > 0 && (
          <Box mt={4}>
            <Typography variant="subtitle1" gutterBottom>
              Standards:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={"10px"}>
              {standards.map((standard, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    px: 3,
                    bgcolor: "success.main",
                    color: "white",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {standard}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveStandard(standard)}
                    sx={{ color: "white", ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Paper>

      <Paper sx={{ p: 4, borderRadius: 2, marginBottom: "30px" }}>
        <Typography variant="h6" gutterBottom>
          Manage Subjects and Exam Types
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 2,
            mt: 2,
          }}
        >
          <div className="d-flex align-items-center gap-2 w-100">
            <TextField
              fullWidth
              label="Add Subject Name"
              value={subjectInput}
              onChange={(e) => setSubjectInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddSubject}>
              Add
            </Button>
          </div>

          <div className="d-flex align-items-center gap-2 w-100">
            <TextField
              fullWidth
              label="Add Exam Type"
              value={examTypeInput}
              onChange={(e) => setExamTypeInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddExamType}>
              Add
            </Button>
          </div>
        </Box>

        {/* Display Subjects */}
        {subjects.length > 0 && (
          <Box mt={4}>
            <Typography variant="subtitle1" gutterBottom>
              Subjects:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={"10px"}>
              {subjects.map((subject, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    px: 3,
                    bgcolor: "warning.light",
                    color: "white",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {subject}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveSubject(subject)}
                    sx={{ color: "white", ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        )}

        {/* Display Exam Types */}
        {examTypes.length > 0 && (
          <Box mt={4}>
            <Typography variant="subtitle1" gutterBottom>
              Exam Types:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={"10px"}>
              {examTypes.map((examType, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    px: 3,
                    bgcolor: "info.main",
                    color: "white",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {examType}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveExamType(examType)}
                    sx={{ color: "white", ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Paper>

      {/* --- Chapter Section --- */}
      <Paper sx={{ p: 4, borderRadius: 2, marginBottom: "30px" }}>
        <Typography variant="h6" gutterBottom>
          Manage Chapters
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 2,
            mt: 2,
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Select Subject</InputLabel>
            <Select
              value={selectedSubject}
              label="Select Subject"
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map((subject, index) => (
                <MenuItem key={index} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="d-flex align-items-center gap-2 w-100">
            <TextField
              fullWidth
              label="Add Chapter Name"
              value={chapterInput}
              onChange={(e) => setChapterInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddChapter}>
              Add
            </Button>
          </div>
        </Box>

        {chapters.length > 0 && (
          <Box mt={2}>
            <Typography variant="subtitle1" gutterBottom>
              Chapters:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap="10px">
              {chapters.map((chapter, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    px: 3,
                    bgcolor: "secondary.light",
                    color: "white",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {chapter.label}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveChapter(chapter)}
                    sx={{ color: "white", ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Paper>

      {/* --- Subtopic Section --- */}
      <Paper sx={{ p: 4, borderRadius: 2, marginBottom: "30px" }}>
        <Typography variant="h6" gutterBottom>
          Manage Subtopics
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 2,
            mt: 2,
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Select Chapter</InputLabel>
            <Select
              value={selectedChapter}
              label="Select Chapter"
              onChange={(e) => setSelectedChapter(e.target.value)}
            >
              {chapters.map((chapter, index) => (
                <MenuItem key={index} value={chapter.chapter}>
                  {chapter.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="d-flex align-items-center gap-2 w-100">
            <TextField
              fullWidth
              label="Add Subtopic Name"
              value={subtopicInput}
              onChange={(e) => setSubtopicInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddSubtopic}>
              Add
            </Button>
          </div>
        </Box>

        {subtopics.length > 0 && (
          <Box mt={2}>
            <Typography variant="subtitle1" gutterBottom>
              Subtopics:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap="10px">
              {subtopics.map((subtopic, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    px: 3,
                    bgcolor: "primary.dark",
                    color: "white",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {subtopic.label}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveSubtopic(subtopic)}
                    sx={{ color: "white", ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default ExamAndStandardManager;
