@component('mail::message')
# Change Password Request

Click on the button below to reset your Password

<?php echo $token ?>


@component('mail::button', ['url' => 'http://localhost:4200/response-password?token='. $token ])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
