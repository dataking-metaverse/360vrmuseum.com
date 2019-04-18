<?php
namespace App;

use App\VRMuseum\User as MongoUser;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    static function getPrivilege(string $privilegeName): array {
        $privileges = config('360vrmuseum.public.privileges');
        return $privileges[$privilegeName];
    }

    static function isEveryoneCan(string $privilegeName): bool {
        $privilege = static::getPrivilege($privilegeName);
        return in_array('*', $privilege);
    }

    function getTypesAttribute() {
        $userTypeFunctions = config('360vrmuseum.auth.userType');
        $output = [];
        foreach($userTypeFunctions as $type => $func) {
            if ($func($this)) { $output[] = $type; }
        }
        return $output;
    }

    function mongodb() {
        return $this->hasOne(MongoUser::class);
    }

    static function hasPrivilegeSafe($user, string $privilegeName): bool {
        return static::isEveryoneCan($privilegeName) || ($user instanceof self && $user->_hasPrivilegeMarked($privilegeName));
    }

    function hasPrivilege(string $privilegeName): bool {
        return static::isEveryoneCan($privilegeName) || $this->_hasPrivilegeMarked($privilegeName);
    }

    function _hasPrivilegeMarked(string $privilegeName): bool {
        $privilege = static::getPrivilege($privilegeName);
        $types = $this->types;
        if (!isset($privilege)) { return false; }
        foreach($types as $type) { if (in_array($type, $privilege)) { return true; } }
        return false;
    }

}
