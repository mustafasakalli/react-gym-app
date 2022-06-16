import React, { useState, useEffect } from 'react'
import { Box, TextField, Button, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = () => {

    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetcExercisesData = async () => {
            const bodyPartsData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, exerciseOptions)
            setBodyParts(['all', ...bodyPartsData])
        }

        fetcExercisesData();

    });

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            console.log(exerciseData)
        }

        const searchedExercises = exerciseData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search))
            || exercise.target.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)

        setSearch('');
        setExercises(searchedExercises);
    }

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            mt="36px"
            padding="20px"
        >
            <Typography
                fontWeight={700}
                textAlign="center"
                mb="50px"
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    size="small"
                    placeholder="Search Exercises"
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                    sx={{
                        input: { fontWeight: "600", border: "none", borderRadius: "6px" },
                        width: { lg: "800px", sm: "380px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px"
                    }}

                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#ff2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "140px", xs: "60px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "40px",
                        position: "absolute"
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>

            </Box>
        </Stack>
    )
}

export default SearchExercises