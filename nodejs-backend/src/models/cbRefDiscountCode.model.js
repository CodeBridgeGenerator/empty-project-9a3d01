
    module.exports = function (app) {
        const modelName = 'cb_ref_discount_code';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            code: { type: Number, required: false, min: 0, max: 10000000 },
applicable: { type: Number, required: false, min: 0, max: 10000000 },
type: { type: String, required: false , enum: ["AMOUNT","PERCENTAGE"] },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };