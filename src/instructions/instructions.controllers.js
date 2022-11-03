//? Dependencies
const Instructions = require("../models/instructions.models");
const uuid = require("uuid");

//? See all Instructions
const getAllIntructions = async () => {
  const data = await Instructions.findAll();
  return data;
};

//? See one Instruction
const getInstructionById = async (id) => {
  const data = await Instructions.findOne({
    where: {
      id,
    },
  });
  return data;
};

//? Create Instruction
const createInstruction = async (data) => {
  const newInstruction = await Instructions.create({
    id: uuid.v4(),
    description: data.description,
    step: data.step,
    recipeId: data.recipeId,
  });
  return newInstruction;
};

//? Modify Instruction
const updateInstruction = async (id, data) => {
  const result = await Instructions.update(data, {
    where: {
      id,
    },
  });
  return result;
};

//? Delete Instruction
const deleteInstruction = async (id) => {
  const data = await Instructions.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllIntructions,
  getInstructionById,
  createInstruction,
  updateInstruction,
  deleteInstruction,
};
