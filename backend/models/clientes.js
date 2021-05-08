const { Schema, model } = require("mongoose");

const clienteSchema = Schema({
  CLIENTNUM: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Attrition_Flag: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Customer_Age: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Gender: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Dependent_count: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Education_Level: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Marital_Status: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Income_Category: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Card_Category: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Months_on_book: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Total_Relationship_Count: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Months_Inactive_12_mon: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Contacts_Count_12_mon: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Credit_Limit: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Total_Revolving_Bal: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Avg_Open_To_Buy: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Total_Amt_Chng_Q4_Q1: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Total_Trans_Amt: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Total_Trans_Ct: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Total_Ct_Chng_Q4_Q1: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Avg_Utilization_Ratio: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_1: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
  Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2: {
    type: String,
    require: [true, "El campo es obligatorio"],
  },
});

module.exports = model("Client", clienteSchema);
