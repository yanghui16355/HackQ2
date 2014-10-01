#!/bin/bash

# be aware of changing the owner and execution level.
app=JLUX_eqc
app_name=$app

catalina_home=$CATALINA_HOME
tomcat_webapp=/Users/zafu/Documents/tools/apache-tomcat-7.0.55/webapps
if [ -d "$catalina_home" ]
then
	tomcat_webapp=$CATALINA_HOME/webapps
else
    echo " Please setup the CATALINA_HOME to your system env!  "  
fi
project_code_base=./../


compiled_target=$project_code_base/$app/target/$app_name.war
tomcat_war=$tomcat_webapp/$app_name.war

src_cfg_app_loc=$project_code_base/$app/src/main/webapp/WEB-INF/applications/*.xml
dest_cfg_app_loc_for_testing=$project_code_base/$app/src/main/resources

jsp_folder=$project_code_base/$app/src/main/webapp/WEB-INF/views/content/home/*.jsp
tomcat_jsp=$tomcat_webapp/$app_name/WEB-INF/views/content/home


if [[ $1 = "--1" ]] 
then
    # used for copy paste the war, args --1
    echo " copy pasty war to tomcat !"
	cd $project_code_base/$app
	mvn clean
	mvn package
    rm -rf $tomcat_war
    rm -rf $tomcat_webapp/$app_name
    cp  $compiled_target $tomcat_webapp
    echo " success !"
elif [[ $1 = "--2" ]] 
then
    # for autodeployement, delete the war deployed
	if [[ $2 = "--3" ]]
	then 
	    rm -rf $tomcat_webapp/$app_name.war
	else
        # use copy the compiled classes to tomcat,args --2
        echo " copy pasty changes classes to tomcat !"
        rm -rf $tomcat_webapp/$app_name/WEB-INF/classes/*
        cp -R $project_code_base/$app/target/classes/* $tomcat_webapp/$app_name/WEB-INF/classes/
        echo " success !"
    fi
elif [[ $1 = "--4" ]] 
then
    # for testing, copy the spring app xml to src/main/resource
	cp -R $src_cfg_app_loc $dest_cfg_app_loc_for_testing
	echo "copy spring cfg to resources !"
elif [[ $1 = "--5" ]] 
then
    # quick change for jsp
	cp $jsp_folder $tomcat_jsp
	echo "copy jsps to tomcat jsp folder !"
else 
    # if no args, prompt below.
    echo "------------------------------------------------------------------------------------------"
    echo "You can specific your args by "
    echo " ./task.sh --1 means copy the built war file to tomcat webapps ."
    echo " ./task.sh --2 means copy the classes to the tomcat classes folder, if any minion changes."
    echo " ./task.sh --2 --3 means copy the classes to the tomcat classes folder, if any minion changes, and then delete the war, ----- this is deprecated."
	echo " ./task.sh --4 for testing, copy spring xml."
	echo " ./task.sh --5 copy modified jsp."
    echo "------------------------------------------------------------------------------------------"
fi