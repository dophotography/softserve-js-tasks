const helloUser = (username) => {
    const currentDate = new Date()
    console.log(currentDate.getHours())
    switch(currentDate) {
        case (currentDate >= 0 && currentDate <=6):
            return output = `<p>Date: ${currentDate}<br>Goog night, ${username}</p>`
        case (currentDate > 6 && currentDate <= 12):
            return output = `<p>Date: ${currentDate}<br>Goog night, ${username}</p>`
        case (currentDate > 12 && currentDate <= 18):
            return output = `<p>Date: ${currentDate}<br>Goog night, ${username}</p>`
        case (currentDate >= 18 && currentDate < 0):
            return output = `<p>Date: ${currentDate}<br>Goog night, ${username}</p>`
    }
}

module.exports = helloUser