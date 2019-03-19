<?php

namespace App\AdminMongoDB;

class ModelLoadHistory extends Model {

    static function impressions(string $mid) {
        return static::where(['m_model' => $mid])->count();
    }
}
