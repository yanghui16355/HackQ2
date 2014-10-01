package com.expedia.lodging.connectivity.util;

import java.text.DecimalFormat;

public class FormatUtil {
	
	
	
	public static String format(double d){
		DecimalFormat df = new DecimalFormat("#");
	    return df.format(d) ;
	}
	public static void main(String[] args){
		double a = 123.12111;
		System.out.print(format(a));
	}
	
}
