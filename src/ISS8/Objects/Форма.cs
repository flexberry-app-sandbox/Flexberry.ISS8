﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS8
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Форма.
    /// </summary>
    // *** Start programmer edit section *** (Форма CustomAttributes)

    // *** End programmer edit section *** (Форма CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормаE", new string[] {
            "НомерФормы as \'Номер формы\'",
            "Наименование as \'Наименование\'"})]
    [AssociatedDetailViewAttribute("ФормаE", "Условие", "УсловиеE", true, "", "Условие", true, new string[] {
            ""})]
    [View("ФормаL", new string[] {
            "НомерФормы as \'Номер формы\'",
            "Наименование as \'Наименование\'"})]
    public class Форма : ICSSoft.STORMNET.DataObject
    {
        
        private string fНомерФормы;
        
        private string fНаименование;
        
        private IIS.ISS8.DetailArrayOfУсловие fУсловие;
        
        // *** Start programmer edit section *** (Форма CustomMembers)

        // *** End programmer edit section *** (Форма CustomMembers)

        
        /// <summary>
        /// НомерФормы.
        /// </summary>
        // *** Start programmer edit section *** (Форма.НомерФормы CustomAttributes)

        // *** End programmer edit section *** (Форма.НомерФормы CustomAttributes)
        [StrLen(255)]
        public virtual string НомерФормы
        {
            get
            {
                // *** Start programmer edit section *** (Форма.НомерФормы Get start)

                // *** End programmer edit section *** (Форма.НомерФормы Get start)
                string result = this.fНомерФормы;
                // *** Start programmer edit section *** (Форма.НомерФормы Get end)

                // *** End programmer edit section *** (Форма.НомерФормы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Форма.НомерФормы Set start)

                // *** End programmer edit section *** (Форма.НомерФормы Set start)
                this.fНомерФормы = value;
                // *** Start programmer edit section *** (Форма.НомерФормы Set end)

                // *** End programmer edit section *** (Форма.НомерФормы Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Форма.Наименование CustomAttributes)

        // *** End programmer edit section *** (Форма.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Форма.Наименование Get start)

                // *** End programmer edit section *** (Форма.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Форма.Наименование Get end)

                // *** End programmer edit section *** (Форма.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Форма.Наименование Set start)

                // *** End programmer edit section *** (Форма.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Форма.Наименование Set end)

                // *** End programmer edit section *** (Форма.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Форма.
        /// </summary>
        // *** Start programmer edit section *** (Форма.Условие CustomAttributes)

        // *** End programmer edit section *** (Форма.Условие CustomAttributes)
        public virtual IIS.ISS8.DetailArrayOfУсловие Условие
        {
            get
            {
                // *** Start programmer edit section *** (Форма.Условие Get start)

                // *** End programmer edit section *** (Форма.Условие Get start)
                if ((this.fУсловие == null))
                {
                    this.fУсловие = new IIS.ISS8.DetailArrayOfУсловие(this);
                }
                IIS.ISS8.DetailArrayOfУсловие result = this.fУсловие;
                // *** Start programmer edit section *** (Форма.Условие Get end)

                // *** End programmer edit section *** (Форма.Условие Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Форма.Условие Set start)

                // *** End programmer edit section *** (Форма.Условие Set start)
                this.fУсловие = value;
                // *** Start programmer edit section *** (Форма.Условие Set end)

                // *** End programmer edit section *** (Форма.Условие Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаE", typeof(IIS.ISS8.Форма));
                }
            }
            
            /// <summary>
            /// "ФормаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаL", typeof(IIS.ISS8.Форма));
                }
            }
        }
    }
}
