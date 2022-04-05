Promise.reject('a')
    .catch(p=>p+'b')
    .catch(p=>p+'c')
    .then(p=>p+'d')
    .finally(p=>p+'e')
    .then(p=>console.log(p));