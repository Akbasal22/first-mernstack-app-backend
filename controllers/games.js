const express = require('express');
const Game = require('../models/gameModel');

const getAllGames = async (req, res) => {
    try {
        const allGames = await Game.find({});
        res.status(200).json({ success: true, games: allGames })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, msg: error });
    }
}

const getSingleGame = async (req, res) => {
    const id = req.params.id
    try {
        const singleGame = await Game.findOne({ _id: id });
        if (!singleGame) {
            return res.status(404).json({ success: false, msg: 'game not found' });
        }
        res.status(200).json({ success: true, game: singleGame })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, msg: error });
    }
}

const updateGame = async (req, res) => {
    console.log('update req received');
    console.log(req.body)
    try {
        const { id } = req.params;
        const game = await Game.findOneAndUpdate({ _id: id }, req.body, {
            new: true, runValidators: true
        });
        if (!game) {
            return res.status(404).json({ success: false, msg: 'task not found' });
        }
        res.status(200).json({ success: true, game: game });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, msg: error });
    }
}

const addGame = async (req, res) => {
    try {
        const newGame = await Game.create(req.body);
        res.status(201).json({ success: true, game: newGame });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, msg: error });
    }
}

const deleteGame = async (req, res) => {
    try {
        const id = req.params.id;
        const game = await Game.findOneAndDelete({ _id: id });
        if (!game) {
            return res.status(404).json({ success: false, msg: 'game not found' });
        }
        res.status(200).json({ success: true, game: game });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, msg: error });
    }
}


module.exports = { getAllGames, getSingleGame, updateGame, addGame, deleteGame }