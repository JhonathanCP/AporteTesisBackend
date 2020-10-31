import mongoose from 'mongoose';

mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Db is connected"))
    .catch(e => console.log(e))