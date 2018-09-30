var faker = require("faker")

function generateLoad() {
    var load = []

    for (var id = 0; id < 50; id++) {
        var loadNo = faker.random.number();
        var vendor = faker.commerce.productName();
        var eta = faker.date.future();

        load.push({
            'loadNo': loadNo,
            'vendor': vendor,
            'eta': eta
        })
    }
    return { "load": load }

}

module.exports = generateLoad

