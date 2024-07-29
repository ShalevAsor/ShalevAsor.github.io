import React from 'react';
import projectGeoChamp from '../assets/img/projects_geo_champ.png';
import projectTilePuzzle from '../assets/img/projects_tile_puzzle.png';
import projectTutorTime from '../assets/img/project_tutor_time.jpg';
import projectAlgoSolverCPP from '../assets/img/projects_algosolvingcpp.png';
import projectCatchThePokemons from '../assets/img/projects_pokemonCatch.png';
import projectMapty from '../assets/img/projects_mapty.png';
import './Projects.css';

const projects = [
  {
    img: projectGeoChamp,
    title: 'Geo-Champ',
    description: 'Geo-Champ is an engaging Android app that tests your geographical knowledge through various speed-based challenges. Users can solve math problems, guess cities and flags, and navigate to destinations. The app features real-time location on Google Maps, a top scores leaderboard, and detailed user statistics for tracking performance.',
    link: 'https://github.com/ShalevAsor/ChallengesGame/tree/master',
    linkText: 'View on GitHub',
  },
  {
    img: projectTilePuzzle,
    title: 'Tile Puzzle',
    description: 'TilePuzzleGame is an advanced puzzle-solving application designed to tackle tile puzzles using a variety of algorithms. It supports A*, IDA*, DFS, BFS, and DFBNB, providing flexibility in solving different puzzle configurations. Users can input custom board setups and view detailed results including the sequence of moves, move count, and performance metrics.',
    link: 'https://github.com/ShalevAsor/TilePuzzleGame/tree/main',
    linkText: 'View on GitHub',
  },
  {
    img: projectTutorTime,
    title: 'Tutor Time',
    description: 'TutorTime is an Android app connecting students with private tutors, supporting both Hebrew and English. Built with Java, it uses Firebase for backend services and follows the Model-View-Controller design pattern. The app leverages libraries like Palette for dynamic design, Material for UI elements, and Glide for efficient image loading.',
    link: 'https://github.com/AlmogJakov/TutorTime?tab=readme-ov-file',
    linkText: 'View on GitHub',
  },
  {
    img: projectAlgoSolverCPP,
    title: 'AlgoSolverCPP',
    description: 'AlgoSolverCPP is a C++ project featuring over 150 coding problems, covering topics like strings, arrays, queues, and more. Each problem is solved with 1-4 different approaches, providing detailed time and space complexity analysis, along with comprehensive documentation and demos.',
    link: 'https://github.com/ShalevAsor/AlgoSolverCPP/tree/main',
    linkText: 'View on GitHub',
  },
  {
    img: projectCatchThePokemons,
    title: 'Catch the Pokemons',
    description: 'Catch the Pokemons is a game designed to demonstrate various graph algorithms through simple graphs UI. Featuring 24 levels, the game employs both directed and undirected graphs, illustrating concepts like shortest path, strong connectivity, and algorithmic efficiency. Players use agents to capture Pokémon while navigating complex graph structures.',
    link: 'https://github.com/ShalevAsor/Catch-The-Pokemons',
    linkText: 'View on GitHub',
  },
  {
    img: projectMapty,
    title: 'Mapty Web App',
    description: 'Mapty Web App is an interactive web application that allows users to log and visualize their physical activities on a map. Users can add markers for different activities, such as running or cycling, and view details like distance and duration. Built with JavaScript and Leaflet, the app supports saving data to local storage and offers a user-friendly interface for tracking fitness activities.',
    link: 'https://shalevasor.github.io/Mapty/',
    linkText: 'View Demo',
  },
];

const Projects = () => (
  <section className="section" id="section--projects">
    <div className="section__title section__title--projects">
      <h2 className="section__description">My Projects</h2>
      <h3 className="section__header">Explore some of my recent work.</h3>
    </div>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.img} alt={project.title} className="project__img" />
          <div className="project__details">
            <h5 className="project__title">{project.title}</h5>
            <p className="project__description">{project.description}</p>
            <a href={project.link} className="project__btn" target="_blank" rel="noopener noreferrer">{project.linkText}</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;