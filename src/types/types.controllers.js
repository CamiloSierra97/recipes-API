//? Dependencies
const Types = require("../models/types.models");

//? See all Types
const getAllTypes = async () => {
  const data = await Types.findAll();
  return data;
};

//? See one Type
const getTypeById = async (id) => {
  const data = await Types.findOne({
    where: {
      id,
    },
  });
  return data;
};

//? Create Type
const createType = async (name) => {
  const newType = await Types.create({
    name,
  });
  return newType;
};

//? Modify Type
const updateType = async (id, data) => {
  const result = await Types.update(data, {
    where: {
      id,
    },
  });
  return result;
};

//? Delete Type
const deleteType = async (id) => {
  const data = await Types.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType,
};
