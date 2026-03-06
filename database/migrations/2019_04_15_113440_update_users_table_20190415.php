<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUsersTable20190415 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->table('users', function(Blueprint $table) {
            $table->string('phone', 50)->nullable()->after('email');
            $table->string('job', 50)->nullable()->after('phone');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->table('users', function(Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('job');
        });
    }
}
