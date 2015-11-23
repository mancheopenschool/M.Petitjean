	

    #!/bin/sh
     
    clear
     
    echo "======================="
    echo " Lancement du script.. "
    echo "======================="
    sleep 2
     
    cd /home/
     
    deluser fx > /dev/null
    deluser yannick > /dev/null
    deluser ameline > /dev/null
    deluser stephanie > /dev/null
    deluser tata > /dev/null
    deluser titi > /dev/null
    deluser toto > /dev/null
     
    sleep 2
     
    rm -rf /home/profs > /dev/null
    echo Dossier del
    rm -rf /home/eleves > /dev/null
    echo Dossier del
    rm -rf /home/administratif> /dev/null
    echo Dossier del
    rm -rf /home/commun > /dev/null
    echo Dossier del
    rm -rf /home/education > /dev/null
    echo Dossier del
    rm -rf /home/direction > /dev/null
    echo Dossier del
     
    sleep 2
     
    delgroup eleves > /dev/null
    delgroup profs > /dev/null
    delgroup administratif > /dev/null
    delgroup education > /dev/null
    delgroup direction > /dev/null
     
    echo Delgroup OK
    echo
    echo Desinstallation terminé


