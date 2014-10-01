package com.expedia.lodging.connectivity.service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.expedia.lodging.connectivity.model.MessageAggregator;
import com.expedia.lodging.connectivity.model.PartnerInfo;
import com.expedia.lodging.connectivity.util.FormatUtil;

public class MessageService {
	
	List<PartnerInfo> partnerInfo;
	Map<String,PartnerInfo> partnerMap;
	
	public List<PartnerInfo> getPartnerInfoList(){
		//List<PartnerInfo> partnerInfo = new ArrayList<PartnerInfo>();
		
		createParterInfoList();
		
		return partnerInfo;
	}
	
	public PartnerInfo getPartnerInfo(String partnerID){
		return partnerMap.get(partnerID);
	}
	
	
	private void createParterInfoList(){
		partnerInfo = new ArrayList<PartnerInfo>();
		partnerMap = new HashMap<String,PartnerInfo>();
		MessageAggregator hs1 = new MessageAggregator("RQIn","Success",1000,"Hilton","Polaris","Hilton","#FF3333");
		MessageAggregator hf1 = new MessageAggregator("RQIn","Fail",50,"Hilton","Polaris","Hilton","#00CC00");
		double result = hs1.getAmount() + hf1.getAmount();
		hs1.setPercentage(FormatUtil.format(hs1.getAmount()/result * 25));
		hf1.setPercentage(FormatUtil.format(hf1.getAmount()/result * 25));
		
		
		MessageAggregator hs2 = new MessageAggregator("RQOut","Success",1000,"Polaris","Expedia","Hilton","#FF3333");
		MessageAggregator hf2 = new MessageAggregator("RQOut","Fail",30,"Polaris","Expedia","Hilton","#00CC00");
		double result2 = hs2.getAmount() + hf2.getAmount();
		hs2.setPercentage(FormatUtil.format(hs2.getAmount()/result2 * 25));
		hf2.setPercentage(FormatUtil.format(hf2.getAmount()/result2 * 25));
		
		MessageAggregator hs3 = new MessageAggregator("RSIn","Success",1000,"Expedia","Polaris","Hilton","#FF3333");
		MessageAggregator hf3 = new MessageAggregator("RSIn","Fail",80,"Expedia","Polaris","Hilton","#00CC00");
		double result3 = hs3.getAmount() + hf3.getAmount();
		hs3.setPercentage(FormatUtil.format(hs3.getAmount()/result3 * 25));
		hf3.setPercentage(FormatUtil.format(hf3.getAmount()/result3 * 25));
		
		MessageAggregator hs4 = new MessageAggregator("RSOut","Success",1000,"Polaris","Hilton","Hilton","#FF3333");
		MessageAggregator hf4 = new MessageAggregator("RSOut","Fail",100,"Polaris","Hilton","Hilton","#00CC00");
		double result4 = hs4.getAmount() + hf4.getAmount();
		hs4.setPercentage(FormatUtil.format(hs4.getAmount()/result4 * 25 ));
		hf4.setPercentage(FormatUtil.format(hf4.getAmount()/result4 * 25 ));
		
		
		
		PartnerInfo h = new PartnerInfo("Hilton","Expedia");
		h.setCategory("ARI");
		h.setRQInS(hs1);
		h.setRQInF(hf1);
		h.setRQOutS(hs2);
        h.setRQOutF(hf2);
		h.setRSInS(hs3);
		h.setRSInF(hf3);
		h.setRSOutS(hs4);
		h.setRSOutF(hf4);
		
		
		MessageAggregator ms1 = new MessageAggregator("RQIn","Success",100,"Expedia","Polaris","Marriott","33FF33");
		MessageAggregator mf1 = new MessageAggregator("RQIn","Fail",5,"Expedia","Polaris","Marriott","FF9999");
		MessageAggregator ms2 = new MessageAggregator("RQOut","Success",100,"Polaris","Marriott","Marriott","33FF33");
		MessageAggregator mf2 = new MessageAggregator("RQOut","Fail",3,"Polaris","Marriott","Marriott","FF9999");
		MessageAggregator ms3 = new MessageAggregator("RSIn","Success",100,"Marriott","Polaris","Marriott","33FF33");
		MessageAggregator mf3 = new MessageAggregator("RSIn","Fail",8,"Marriott","Polaris","Marriott","FF9999");
		MessageAggregator ms4 = new MessageAggregator("RSOut","Success",100,"Polaris","Expedia","Marriott","33FF33");
		MessageAggregator mf4 = new MessageAggregator("RSOut","Fail",10,"Polaris","Expedia","Marriott","FF9999");
		
		PartnerInfo m = new PartnerInfo("Marriott","NotifSP");
		m.setCategory("Booking");
		m.setRQInS(ms1);
		m.setRQInF(mf1);
		m.setRQOutS(ms2);
		m.setRQOutF(mf2);
		m.setRSInS(ms3);
		m.setRSInF(mf3);
		m.setRSOutS(ms4);
		m.setRSOutF(mf4);

        MessageAggregator gs1 = new MessageAggregator("RQIn","Success",100,"Hotel.com","Polaris","G6","33FF33");
        MessageAggregator gf1 = new MessageAggregator("RQIn","Fail",5,"Hotel.com","Polaris","G6","FF9999");
        MessageAggregator gs2 = new MessageAggregator("RQOut","Success",100,"Polaris","G6","G6","33FF33");
        MessageAggregator gf2 = new MessageAggregator("RQOut","Fail",3,"Polaris","G6","G6","FF9999");
        MessageAggregator gs3 = new MessageAggregator("RSIn","Success",100,"G6","Polaris","G6","33FF33");
        MessageAggregator gf3 = new MessageAggregator("RSIn","Fail",8,"G6","Polaris","G6","FF9999");
        MessageAggregator gs4 = new MessageAggregator("RSOut","Success",100,"Polaris","Hotel.com","G6","33FF33");
        MessageAggregator gf4 = new MessageAggregator("RSOut","Fail",10,"Polaris","Hotel.com","G6","FF9999");

        PartnerInfo g = new PartnerInfo("G6","NotifSP");
        g.setCategory("Booking");
        g.setRQInS(ms1);
        g.setRQInF(mf1);
        g.setRQOutS(ms2);
        g.setRQOutF(mf2);
        g.setRSInS(ms3);
        g.setRSInF(mf3);
        g.setRSOutS(ms4);
        g.setRSOutF(mf4);
		
		partnerInfo.add(h);
		partnerInfo.add(m);
        partnerInfo.add(g);
		
		partnerMap.put(h.getPartnerID(), h);
		partnerMap.put(m.getPartnerID(), m);
        partnerMap.put(g.getPartnerID(), g);


	}
	
	public static void main(String[] args){
		DecimalFormat df = new DecimalFormat();
	    df.setMaximumFractionDigits(2);
	    df.setMinimumFractionDigits(2);
	    System.out.println(df.format(0.21123123d) + " kg\n");
	}
}
