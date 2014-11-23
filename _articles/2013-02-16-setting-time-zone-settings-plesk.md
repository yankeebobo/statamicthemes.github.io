---
title: "Setting Your Time Zone Settings In Plesk"
layout: post
date: 2013-02-16
author: garethredfern
categories:
  - installing
tags:
  - tips
summary: >
  When you first install Statamic you may well come
  across the following "Error It is not safe to rely
  on the system's timezone settings." Don't panic
  this is really easy to fix.
---
This is a common issue and is caused if your timezone settings aren't correctly set in your php.ini file. You have a few options to resolve the issue and you can read how the Statamic guys recommend fixing it on their [support page](http://support.statamic.com/kb/error-messages/error-it-is-not-safe-to-rely-on-the-systems-timezone-settings).

Now I am not a server guru so the thought of tinkering with php.ini files can be a scary idea, actually it really isn't that hard if you have access to them. Another option (my preferred) is setting them in your Plesk control panel.

### System Timezone Settings In Plesk
When you login to your Plesk admin area you have two options for setting this:

* At the Service Plan level
* At the Domain level

#### At The Service Plan Level
If you are going to be setting up more than one Statamic site I would create a service plan that you can set and forget for all Statamic sites. To do this you can follow [these instructions](http://statamicthemes.clarify-it.com/d/gzlm6q).

1. Click on the "Service Plans" menu option.
2. Select "Add New Plan".
3. In your service plan PHP Settings you can set the time zone setting in the additional configuration directives at the bottom of the settings page. In the textarea type the following: `date.timezone = Europe/London` you can find your timezone by looking it up on [php.net](http://www.php.net/manual/en/timezones.php).
4. Click OK.

Once this service plan is set up you can now create any Statamic sites under this plan and the time zone setting will be set correctly.

#### At The Domain Level
This is very similar to setting a service plan only this time the timezone settings will be set on a per domain basis. Again login to Plesk and navigate to the domain you would like to set the timezone settings for then follow [these instructions](http://statamicthemes.clarify-it.com/d/x27d9m).

1. In the General area select the Customize tab.
2. Select the third tab along "PHP Settings".
3. Scroll to the bottom of your PHP Settings area and enter your timezone setting. For more information on what your timezone settings should be see the [PHP documentation](http://php.net/manual/en/timezones.php).

### Summary
So there you have it, you have a number of options for fixing the "Error It is not safe to rely on the system's timezone settings" issue and using Plesk can make setting your timezone pain free, especially if you set it at the Service Plan level. I hope this will help anyone who is setting up Statamic for the first time, who comes across this error, needing a simple set and forget solution.

### Update
As of v1.5, you can now set your timezone in the settings file.

Happy Days!
