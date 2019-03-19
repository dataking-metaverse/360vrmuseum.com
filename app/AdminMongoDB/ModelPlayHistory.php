<?php

namespace App\AdminMongoDB;

class ModelPlayHistory extends Model {

    static function visits(string $mid) {
        return static::where(['m_model' => $mid])->count();
    }

    static function uniqueVisitors(string $mid) {
        return static::where(['m_model' => $mid])->pluck('ip')->unique()->count();
    }
}
