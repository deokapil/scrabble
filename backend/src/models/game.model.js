// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// board ki alag service banye ki yahin
module.exports = function (app) {
  const modelName = "game";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      title: { type: String, required: true },
      owner_id: { type: Schema.Types.ObjectId, ref: "users", required: true },
      challengers: [{ type: Schema.Types.ObjectId, ref: "users" }],
      status: {
        type: String,
        enum: ["NEW", "INCOMPLETE", "ARCHIVED"],
        default: "NEW",
      },
      board_id: { type: Schema.Types.ObjectId, ref: "board" },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
