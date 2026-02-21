<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\ForgotPasswordController;


// ✅ Reset password
Route::get('/reset-password/{token}', [ForgotPasswordController::class, 'showResetForm'])
    ->name('password.reset');

// ✅ Route de test pour vérifier la session utilisateur
Route::get('/test-user', function () {
    return auth()->check() ? auth()->user()->getUserName() : 'Aucun utilisateur connecté';
});

// ✅ Catch-all vers React, mais seulement après toutes les autres routes
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api)(?!admin).*$');

use Illuminate\Support\Facades\Auth;


Route::post('/logout', function () {
    Auth::logout(); // ✅ déconnecte l'utilisateur
    request()->session()->invalidate(); // ✅ détruit la session
    request()->session()->regenerateToken(); // ✅ évite les erreurs CSRF

    return redirect('/admin/login'); // ✅ redirige vers la page de login
})->name('logout');



Route::get('/test-notif', function () {
    $user = \App\Models\User::first();
    $user->notify(new \App\Notifications\BienvenueNotification());
    return "Notification envoyée";
});

