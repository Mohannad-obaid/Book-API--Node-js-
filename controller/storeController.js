var sName = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../util/utility');

exports.getStoreList = async (req, res) => {
    try {
        var storeListQuery = sName.queryList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.dbQuery(storeListQuery);

        return res.status(200).send(JSON.stringify(result.rows));
    } catch (err) {
        return res.status(500).send({ error: 'Error(store controller) *** ' + err.message });
    }

}

exports.saveStore = async (req, res) => {
    try {
        var storeName = req.body.storeName;
        var created_by = 'admin';
        let storeCode = util.generateStoreCode();

        if(!storeName || !created_by){
            return res.status(400).send({ error: 'store name and created by are required' });
        }

        var saveStoreQuery = sName.queryList.SAVE_STORE_QUERY;

        var queryParams = [storeName, storeCode, created_by];
        var result = await dbConnection.dbQuery(saveStoreQuery, queryParams);

        return res.status(200).send(JSON.stringify(result.rows));
    } catch (err) {
        return res.status(500).send({ error: 'Error **** \n' + err.message });
    }
}

exports.updateStore = async (req, res) => {
    try {
        var store_id = req.body.storeID;
        var store_name = req.body.storeName;
        var store_code = req.body.storeCode;

        if(!store_id || !store_name || !store_code ){
            return res.status(400).send({ error: 'store id, store name, store code and created by are required' });
        }

        var updateStoreQuery = sName.queryList.UPDATE_STORE_QUERY;

        var queryParams = [store_name, store_code, store_id];
        var result = await dbConnection.dbQuery(updateStoreQuery, queryParams);

        return res.status(200).send(JSON.stringify(result.rows));
    } catch (err) {
        return res.status(500).send({ error: 'Error **** \n' + err.message });
    }
}

exports.deleteStore = async (req, res) => {
    try {
        var store_id = req.params.storeId;

        if(!store_id){
            return res.status(400).send({ error: 'store id is required' });
        }

        var deleteStoreQuery = sName.queryList.DELETE_STORE_QUERY;

        var result = await dbConnection.dbQuery(deleteStoreQuery, [store_id]);

        return res.status(200).send('success delete' );
    } catch (err) {
        return res.status(500).send({ error: 'Error **** \n' + err.message });
    }
}